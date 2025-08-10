"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Modal from "@/components/shared/modals/Modal";
import { generateMultiTensePDF } from "@/components/shared/format/PDF/multi-tenses/multi-tense-generator";
import { generatePDF } from "@/components/shared/format/PDF/All-tenses/generatePDF";
import TopicCard from "./TopicCard";
import FAQSection from "./FAQSection";
import {
  grammarTopics,
  getTenseDisplayName,
  getTenseDescription,
} from "./utils/grammarTopics";
import {
  PDF_BENEFITS,
  HOW_TO_USE_STEPS,
  PDF_CONTENT_FEATURES,
  PDF_HIGHLIGHTS,
  LEARNING_TIPS,
  PDF_FORMATS,
  PDF_USAGE_SCENARIOS,
  DOWNLOAD_OPTIONS,
  PDF_STATISTICS,
  FAQ_DATA,
} from "./utils/staticData";
import toast from "react-hot-toast";
import type { GrammarTopic } from "@/types/download-pdf";
import { Button } from "@/components/ui/button";

// Pre-defined gradients to avoid random generation on each render
const PREDEFINED_GRADIENTS = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  "linear-gradient(135deg, #ff8a80 0%, #ff5722 100%)",
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
];

const ContentPDF = () => {
  const [selectedTopic, setSelectedTopic] = useState<GrammarTopic | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadingAll, setDownloadingAll] = useState<boolean>(false);

  // Generate stable gradients only once on mount
  const cardGradients = useMemo(() => {
    return grammarTopics.map(
      (_, index) => PREDEFINED_GRADIENTS[index % PREDEFINED_GRADIENTS.length]
    );
  }, []);

  const handleTopicClick = useCallback((topic: GrammarTopic) => {
    setSelectedTopic(topic);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedTopic(null);
  }, []);

  const handleDownloadAllTenses = useCallback(async () => {
    if (!selectedTopic || isDownloading) return;

    setIsDownloading(true);

    try {
      await generateMultiTensePDF(selectedTopic.tenses);
      toast.success(`Đã tải thành công ${selectedTopic.tenses.length} chủ đề!`);
    } catch (error) {
      toast.error(`"Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại!" ${error}`);
    } finally {
      setIsDownloading(false);
    }
  }, [selectedTopic, isDownloading]);

  const handleDownloadSingleTense = useCallback(
    async (tenseKey: string) => {
      if (isDownloading) return;

      setIsDownloading(true);

      try {
        await generateMultiTensePDF([tenseKey]);
        toast.success("Đã tải PDF thành công!");
      } catch (error) {
        toast.error(`Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại! ${error}`);
      } finally {
        setIsDownloading(false);
      }
    },
    [isDownloading]
  );

  const handleDownloadAll119Tenses = useCallback(async () => {
    if (downloadingAll) return;

    setDownloadingAll(true);

    // Show immediate loading feedback
    const toastId = toast.loading("Đang khởi tạo quá trình tạo PDF...");

    try {
      // Small delay to ensure UI updates
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Update toast message
      toast.dismiss(toastId);
      const processingToast = toast.loading(
        "Đang xử lý tất cả 119 chủ đề ngữ pháp..."
      );

      await generatePDF();

      toast.dismiss(processingToast);
      toast.success("🎉 Đã tải thành công tất cả 119 chủ đề ngữ pháp!", {
        duration: 5000,
      });
    } catch (error) {
      toast.error(`Có lỗi xảy ra khi tạo PDF. Vui lòng thử lại sau! ${error}`);
    } finally {
      setDownloadingAll(false);
    }
  }, [downloadingAll]);

  useEffect(() => {
    setIsMounted(true);
    // Reset any stuck states on mount
    setDownloadingAll(false);
    setIsDownloading(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements - optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-4 w-96 h-96 bg-gradient-to-bl from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto p-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Header Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Tài Liệu Ngữ Pháp Tiếng Anh
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bộ tài liệu hoàn chỉnh về ngữ pháp tiếng Anh với các chủ đề được
              phân loại chi tiết, từ cơ bản đến nâng cao
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Cập nhật mới nhất: Tháng 8, 2025</span>
            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Nội dung chi tiết
              </h3>
              <p className="text-sm text-gray-600">
                Giải thích đầy đủ lý thuyết, ví dụ và bài tập thực hành
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Phân loại rõ ràng
              </h3>
              <p className="text-sm text-gray-600">
                Chia thành các chủ đề cụ thể, dễ tìm kiếm và học tập
              </p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-3">📄</div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Xuất PDF tiện lợi
              </h3>
              <p className="text-sm text-gray-600">
                Tải về định dạng PDF chất lượng cao để học offline
              </p>
            </div>
          </div>

          {/* PDF Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
              🚀 Tại Sao Nên Tải PDF?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PDF_BENEFITS.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Use Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/30">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
              📋 Hướng Dẫn Sử Dụng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOW_TO_USE_STEPS.map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grammar Topics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grammarTopics.map((topic, index) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                gradient={cardGradients[index]}
                onClick={() => handleTopicClick(topic)}
              />
            ))}
          </div>

          {/* Special "All Tenses" Card */}
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              🎁 Đặc Biệt - Tải Tất Cả
            </h2>
            <div className="flex justify-center">
              <div
                className={`group relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 border-4 border-yellow-400 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-200 hover:-translate-y-1 overflow-hidden cursor-pointer max-w-2xl w-full ${
                  downloadingAll ? "opacity-80 cursor-not-allowed" : ""
                }`}
                onClick={handleDownloadAll119Tenses}
              >
                {/* Static background elements - no animations */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-purple-400/20 opacity-50"></div>

                {/* Loading overlay */}
                {downloadingAll && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
                    <div className="bg-white/95 rounded-xl p-6 flex flex-col items-center gap-4 min-w-[280px] shadow-xl">
                      <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                      <div className="text-center">
                        <div className="text-purple-900 font-bold text-xl mb-1">
                          Đang tạo PDF...
                        </div>
                        <div className="text-purple-700 text-base">
                          Vui lòng chờ trong giây lát
                        </div>
                        <div className="text-purple-600 text-sm mt-2">
                          Không đóng trang này
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="relative z-10 text-center space-y-4">
                  <div className="text-6xl mb-4">📚✨</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                    Tải Tất Cả 119 Chủ Đề
                  </h3>
                  <h4 className="text-xl font-semibold text-yellow-100 mb-4 drop-shadow">
                    Download All 119 Grammar Topics
                  </h4>

                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 space-y-2">
                    <p className="text-white/90 flex items-center justify-center gap-2 drop-shadow">
                      <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                      Bộ sưu tập hoàn chỉnh ngữ pháp tiếng Anh
                    </p>
                    <p className="text-white/90 flex items-center justify-center gap-2 drop-shadow">
                      <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                      Complete English grammar collection
                    </p>
                    <p className="text-white/90 flex items-center justify-center gap-2 drop-shadow">
                      <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                      Tất cả từ cơ bản đến nâng cao trong một PDF
                    </p>
                  </div>

                  <div className="mt-6 bg-yellow-400/90 text-purple-900 px-6 py-3 rounded-xl font-bold text-lg shadow-lg group-hover:bg-yellow-300 transition-colors duration-300">
                    {downloadingAll ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-purple-900 border-t-transparent rounded-full animate-spin"></div>
                        <span>Đang tạo PDF...</span>
                      </div>
                    ) : (
                      "🎯 Nhấn để tải ngay - Click to download now!"
                    )}
                  </div>

                  <div className="mt-4 text-sm text-yellow-100/80 font-medium">
                    Kích thước ước tính: ~15-20MB | Estimated size: ~15-20MB
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PDF Content Preview Section */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              🔍 Nội Dung Trong PDF
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  📖 Mỗi Chủ Đề Bao Gồm:
                </h3>
                <div className="space-y-3">
                  {PDF_CONTENT_FEATURES.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  🎯 Đặc Điểm Nổi Bật:
                </h3>
                <div className="space-y-3">
                  {PDF_HIGHLIGHTS.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">
                        {highlight.icon}
                      </span>
                      <span className="text-gray-700">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Learning Tips Section */}
          <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              💡 Mẹo Học Hiệu Quả
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEARNING_TIPS.map((tip, index) => (
                <div
                  key={index}
                  className={`text-center p-6 ${tip.bgColor} rounded-xl`}
                >
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PDF Formats Section */}
          <div className="mt-16 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              📋 Các Định Dạng PDF
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PDF_FORMATS.map((format, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{format.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {format.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {format.description}
                    </p>
                    <div className="text-lg font-semibold text-blue-600 mb-4">
                      {format.size}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {format.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Usage Scenarios Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              👥 Ai Sử Dụng PDF Này?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PDF_USAGE_SCENARIOS.map((scenario, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{scenario.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {scenario.title}
                  </h3>
                  <div className="space-y-3">
                    {scenario.scenarios.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Options Section */}
          <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              ⚡ Tùy Chọn Tải PDF
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOWNLOAD_OPTIONS.map((option, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center"
                >
                  <div
                    className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}
                  >
                    {option.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {option.description}
                  </p>
                  <div className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                    {option.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              📊 Thống Kê Ấn Tượng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PDF_STATISTICS.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              ❓ Câu Hỏi Thường Gặp
            </h2>
            <FAQSection faqData={FAQ_DATA} />
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🚀 Bắt Đầu Học Ngay Hôm Nay!
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Sử dụng tài liệu của chúng tôi để cải thiện tiếng Anh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleDownloadAll119Tenses}
                disabled={downloadingAll}
                className="px-8 py-3 bg-yellow-400 text-purple-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-w-[280px] flex items-center justify-center gap-2"
              >
                {downloadingAll ? (
                  <>
                    <div className="w-5 h-5 border-2 border-purple-900 border-t-transparent rounded-full animate-spin"></div>
                    <span>Đang tạo PDF...</span>
                  </>
                ) : (
                  <>📚 Tải Tất Cả 119 Chủ Đề</>
                )}
              </Button>
              <div className="text-sm opacity-75">
                ⭐ Miễn phí 100% • Không cần đăng ký
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying tenses */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedTopic?.title || ""}
        subtitle={selectedTopic?.subtitle || ""}
        headerIcon={<span className="text-2xl">{selectedTopic?.icon}</span>}
        maxWidth="max-w-6xl"
        footer={
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Button
              onClick={handleDownloadAllTenses}
              disabled={isDownloading}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <>🔄 Đang tạo PDF...</>
              ) : (
                <>
                  📄 Tải PDF Toàn Bộ ({selectedTopic?.tenses?.length || 0} chủ
                  đề)
                </>
              )}
            </Button>
            <Button
              onClick={handleCloseModal}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Đóng
            </Button>
          </div>
        }
      >
        {selectedTopic && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Mô tả:</strong> {selectedTopic.description}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Description:</strong> {selectedTopic.englishDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedTopic.tenses.map((tenseKey: string, index: number) => {
                const displayName = getTenseDisplayName(tenseKey);
                const description = getTenseDescription(tenseKey);

                return (
                  <div
                    key={tenseKey}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:border-blue-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {index + 1}. {displayName}
                        </h4>
                        {description && (
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2 mt-3">
                      <Button
                        onClick={() => handleDownloadSingleTense(tenseKey)}
                        disabled={isDownloading}
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isDownloading ? "🔄" : "📥"} Tải PDF
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default React.memo(ContentPDF);
